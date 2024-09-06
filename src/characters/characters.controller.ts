import { 
    Controller,
    Get,
    Put,
    Param,
    Body,
    Post,
    Delete,
    UsePipes,
    ValidationPipe,
    HttpCode,
} from '@nestjs/common';
import {
    ApiCreatedResponse,
    ApiNoContentResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiOperation,
    ApiTags,
} from '@nestjs/swagger';
import { CharactersService } from './characters.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';

@ApiTags('characters')
@Controller('characters')
export class CharactersController {
    constructor(private readonly charactersService: CharactersService) {}

    @ApiOperation({ summary: 'Get all characters' })
    @ApiOkResponse({ type: [Character] })
    @Get()
    findAll() {
        return this.charactersService.findAll();
    }

    @ApiOperation({ summary: 'Get character by id' })
    @ApiOkResponse({ type: Character })
    @ApiNotFoundResponse({ description: 'Character not found' })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.charactersService.findOne(id);
    }

    @ApiOperation({ summary: 'Create character' })
    @ApiCreatedResponse({
        description: 'Card created',
        type: Character,
    })
    @UsePipes(new ValidationPipe({transform: true}))
    @Post()
    createCharacter(@Body() character: CreateCharacterDto) {
        return this.charactersService.createCharacter(character);
    }

    @ApiOperation({ summary: 'Update character by id' })
    @ApiOkResponse({ type: Character })
    @ApiNotFoundResponse({ description: 'Character not found' })
    @Put(':id')
    updateCharacter(
        @Param('id') id: string,
        @Body() updatedCharacter: UpdateCharacterDto
    ) {
        return this.charactersService.updateCharacter(id, updatedCharacter)
    }

    @ApiOperation({ summary: 'Delete character by id' })
    @ApiNoContentResponse({ description: 'Delete with success' })
    @ApiNotFoundResponse({ description: 'Character not found' })
    @Delete(':id')
    @HttpCode(204)
    deleteCharacter(@Param('id') id: string) {
        this.charactersService.deleteCharacter(id)
    }

}
