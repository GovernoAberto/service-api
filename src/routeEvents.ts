import { EventRepository } from "@repositories/EventRepository";
import axios from "axios";

export default function routeEvents(req, res, next) {
  const ip = req.headers['x-forwarded-for'] || req.ip;
  
  if(ip == '::1' || ip == '201.40.150.117') {
    next();
    return;
  }
  const repository = new EventRepository();

  axios({
    method: 'get',
    url: 'https://ipinfo.io/' + ip,
    params: { token: "c06c6b70576982" }
  }).then(result => {
    repository.add({ ip: ip, url: req.originalUrl, region: result.data.region, city: result.data.city, client: result.data });
  }).catch(error => { 
    repository.add({ ip: ip, url: req.originalUrl, client: null });
  });
  
  next();
}