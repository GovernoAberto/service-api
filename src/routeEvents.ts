import { EventRepository } from "@repositories/EventRepository";
import { IpService } from "@services/IpService";

export default function routeEvents(req, res, next) {
  const ignoredRoutes = [
    '/visualization/gentilico', '/visualization/prefeito',
    '/visualization/populacao', '/visualization/area-territorial'
  ];
  if(ignoredRoutes.includes(req.path)) {
    next();
    return;
  }

  const ip = req.headers['x-forwarded-for'] || req.ip;
  const ignoredIps = process.env.IGNORED_IPS.split(",");
  
  if(ignoredIps.includes(ip)) {
    
    next();

  } else {

    const repository = new EventRepository();

    new IpService().detectInfo(ip).then(result => {

      if(result) {
        repository.add({ ip: ip, url: req.path, params: req.query, region: result.region, city: result.city, client: result });
        return;
      }
      
    }).catch(() => { 
      return;
    });
    
    next();
  }
}