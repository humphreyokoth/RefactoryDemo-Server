import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEventActivityDto } from '../events/dto/create-event-activity.dto';
import { UpdateEventActivityDto } from './dto/update-event-activity.dto';

import { Repository } from 'typeorm';
import { EventActivity } from './entities/event-activity.entity';
import SearchDto from 'src/shared/dto/search.dto';

@Injectable()
export class EventActivitiesService {
 
 
 

  constructor(
    @InjectRepository(EventActivity)
    private readonly repository: Repository<EventActivity>,
  ) {}
    
      
    async create(data:EventActivity):Promise<EventActivity>{
      return await this.repository.save(data);
    }


  async findAll(req: SearchDto):Promise<EventActivity[]>{
    return await this.repository.find();
  }

  async findOne(id: number):Promise<EventActivity>{
    console.log("finding one");
    return await this.repository.findOne(id);
  
  }

  async update(data: EventActivity): Promise<EventActivity> {
    console.log("updating ");
    return await this.repository.save(data);
  }

  async remove(id: number):Promise<void> {
    console.log("removing an activity");
    await this.repository.delete(id);
   
  }
}
