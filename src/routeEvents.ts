import { EventRepository } from "@repositories/EventRepository";
import { IpService } from "@services/IpService";

export default function routeEvents(req, res, next) {
  const ip = req.headers['x-forwarded-for'] || req.ip;

  const repository = new EventRepository();

  new IpService().detectInfo(ip).then(result => {

    if(result) {
      repository.add({ ip: ip, url: req.originalUrl, region: result.region, city: result.city, client: result });
    } else {
      repository.add({ ip: ip, url: req.originalUrl, client: null });
    }
    
  }).catch(() => { 
    repository.add({ ip: ip, url: req.originalUrl, client: null });
  });
  
  next();
}