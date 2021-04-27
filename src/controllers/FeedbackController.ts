import { Request, Response } from 'express';
import { IpService } from '@services/IpService';
import { LikeRepository } from '@repositories/LikeRepository';
import { formatISO } from 'date-fns';
import { FeedbackRepository } from '@repositories/FeedbackRepository';

class FeedbackController
{
  async like(req: Request, res: Response, next) {
    try {
      const ip = String(req.headers['x-forwarded-for'] || req.ip);
      const likeRepository = new LikeRepository();

      if(req.params.visualization == "undefined") {
        res.send(false);
        return;
      }

      new IpService().detectInfo(ip).then(ipInfo => {
        likeRepository.like({
          visualization: req.params.visualization,
          city: (req.query.city != undefined) ? Number(req.query.city) : null,
          ip: String(req.headers['x-forwarded-for'] || req.ip),
          date: formatISO(new Date()),
          info: ipInfo
        }).catch(e => {
          console.log(e.message);
        });
      }).catch(e => {
        console.log(e.message);
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

  async feedback(req: Request, res: Response, next) {
    try {
      if(req.params.visualization == "undefined") {
        res.send(false);
        return;
      }

      const repository = new FeedbackRepository();
      repository.add(req.params.visualization, req.body.comment, req.body.contact);

      res.send(true);

    } catch (error) {
      next(error);
    }
  }
}

export default new FeedbackController();