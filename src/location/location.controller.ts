import { Controller, Get, Render } from '@nestjs/common';
import { LocationService } from './location.service'
import { LocationListDto } from './location-list.dto';
import { MappingRegistryService } from 'src/common/mapping-registry.service';
import { LocationDto } from './location.dto';
import { Location } from './location.entity';
import { Post,Put, Delete, Body, Param } from  '@nestjs/common';

@Controller()
export class LocationController {
  constructor(
    private readonly locationService: LocationService,
    private readonly mappingRegistryService: MappingRegistryService,
  ) {}

  @Get()
  @Render('list.hbs')
  public async listLocations(): Promise<LocationListDto> {
      const locations = await this.locationService.list();
      const dtos = locations.map(location => 
          this.mappingRegistryService.map<LocationDto>(Location.name, LocationDto.name, location));
        
      return { locations: dtos };
    }

  @Get('/url')
  @Render('list.hbs')
    public async listLocations1(): Promise<LocationListDto> {
      const locations = await this.locationService.list();
      const dtos = locations.map(location => 
          this.mappingRegistryService.map<LocationDto>(Location.name, LocationDto.name, location));
        
      return { locations: dtos };
    }

  @Post('/create')
    async create(@Body() LocationData: Location): Promise<any> {
      return this.locationService.create(LocationData);
    }  

  @Put('/:id/update')
    async update(@Param('id') id, @Body() LocationData: Location): Promise<any> {
        LocationData.id = String(id);
        console.log('Update #' + LocationData.id)
        return this.locationService.update(LocationData);
    }  

  @Delete('/:id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.locationService.delete(id);
    }  
}
 