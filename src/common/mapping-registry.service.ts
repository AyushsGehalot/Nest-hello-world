import 'automapper-ts';
import { MappingService } from "./mapping.service";
import { Injectable } from '@nestjs/common';

@Injectable()
export class MappingRegistryService {
    private readonly mappingService: MappingService[] = [];

    public registerMappingService(mappingService: MappingService){
        this.mappingService.push(mappingService);
        mappingService.addMapping();
    }

    public map<T>(source: string, target: string, object: any): T {
        return automapper.map(source, target, object) as T;
    }
}