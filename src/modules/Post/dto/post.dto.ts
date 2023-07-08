import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { example } from "yargs";

export class CreatePostDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: "example" })
    title: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: "example" })
    body: string;
}

export class UpdatePostDto {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: "example" })
    title: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: "example" })
    body: string;
}

export class DeletePostDto {
    @IsNotEmpty()
    // @IsString()
    @ApiProperty({ example: "1" })
    id: string;
}