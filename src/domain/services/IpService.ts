import { City } from "@entities/City";
import { CityRepository } from "@repositories/CityRepository";
import { StateRepository } from "@repositories/StateRepository";
import axios from 'axios';

export class IpService
{
  async detectCity(ip) : Promise<City> {
    try {
      const ipInfo = await this.detectInfo(ip);

      if(ipInfo.country == 'BR' && ipInfo.region && ipInfo.city) {
        const state = await new StateRepository().findByName(ipInfo.region);
        const city = await new CityRepository().findByStateAndName(state.alias, ipInfo.city.toUpperCase());
        
        return city;

      } else {
        return;
      }
    } catch (error) {
      return;
    }
  }

  async detectInfo(ip) : Promise<{ country: string, city: string, region: string }> {
    try {
      const ignoredIps = process.env.IGNORED_IPS.split(",");
      if(ignoredIps.includes(ip)) {
        return;
      }

      const ipInfo = (await axios({
        method: 'get',
        url: 'https://ipinfo.io/' + ip,
        params: { token: process.env.IP_INFO_TOKEN }
      })).data;

      return ipInfo;
    } catch (error) {
      return;
    }
  }
}