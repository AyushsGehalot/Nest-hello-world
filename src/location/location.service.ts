import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './location.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class LocationService {
    constructor (
        @InjectRepository(Location)
        private readonly locationRepository: Repository<Location>,
    ){}

    public async list(): Promise<Location[]> {
       return this.locationRepository.find();
    }

    async  findAll(): Promise<Location[]> {
        return await this.locationRepository.find();
    }

    async  create(location: Location): Promise<Location> {
        return await this.locationRepository.save(location);
    }

    async update(location: Location): Promise<UpdateResult> {
        return await this.locationRepository.update(location.id, location);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.locationRepository.delete(id);
    }
}
 