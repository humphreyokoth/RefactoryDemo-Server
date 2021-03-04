import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import SearchDto from '../shared/dto/search.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { EventsService } from './events.service';
import GroupEventDto from './dto/group-event.dto';
import CreateEventDto from './dto/create-event.dto';

@UseGuards(JwtAuthGuard)
@ApiTags('Events')
@Controller('api/events/event')
export class EventsController {
  constructor(private readonly service: EventsService) {}

  @Get()
  async findAll(@Query() req: SearchDto): Promise<GroupEventDto[]> {
    console.log('Data>>>', req);
    return this.service.findAll(req);
  }

  @Post()
  async create(@Body() data: CreateEventDto): Promise<GroupEventDto> {
    return await this.service.create(data);
  }

  @Put()
  async update(@Body() data: GroupEventDto): Promise<GroupEventDto> {
    return await this.service.update(data);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<GroupEventDto> {
    return await this.service.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.service.remove(id);
  }
}
