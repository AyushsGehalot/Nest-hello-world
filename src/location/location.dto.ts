import { IsInt, IsString } from 'class-validator';

export class LocationDto {
    @IsString()
    public readonly id: string;

    @IsString()
    public readonly name: string;

    @IsString()
    public readonly city: string;

    @IsString()
    public readonly state: string;

    @IsString()
    public readonly country: string;

    @IsInt()
    public readonly zip: number;
}