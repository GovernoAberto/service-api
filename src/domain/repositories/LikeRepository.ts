import LikeModel, { LikeInterface } from "@infra/database/mongodb/LikeModel";

export class LikeRepository{

  private mongoDB: typeof LikeModel;

  constructor() {
    this.mongoDB = LikeModel;
  }

  async hasLike(ip: string, visualization:string) : Promise<boolean> {
    const like = await this.mongoDB.findOne({ ip: ip, visualization: visualization});
    return Boolean(like);
  }

  async like(like: any) : Promise<boolean> {
    const hasLike = await this.hasLike(like.ip, like.visualization);
    if(!hasLike) {
      await this.mongoDB.create(like);
      return true;
    }
    
    return false;
  }
}