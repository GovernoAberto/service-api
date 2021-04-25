import { Request, Response } from 'express';
import { IpService } from '@services/IpService';
import { LikeRepository } from '@repositories/LikeRepository';

class FeedbackController
{
  async like(req: Request, res: Response, next) {
    try {
      const ip = String(req.headers['x-forwarded-for'] || req.ip);
      const likeRepository = new LikeRepository();

      new IpService().detectInfo(ip).then(ipInfo => {
        likeRepository.like({
          visualization: req.params.visualization,
          city: (req.query.city != undefined) ? Number(req.query.city) : null,
          ip: String(req.headers['x-forwarded-for'] || req.ip),
          info: ipInfo
        });
      });

      res.send(true);

    } catch (error) {
      next(error);
    }
  }

  async hasLike(req: Request, res: Response, next) {
    try {
      const likeRepository = new LikeRepository();
      const ip = String(req.headers['x-forwarded-for'] || req.ip);

      res.send(await likeRepository.hasLike(ip, req.params.visualization));

    } catch (error) {
      next(error);
    }
  }
}

export default new FeedbackController();