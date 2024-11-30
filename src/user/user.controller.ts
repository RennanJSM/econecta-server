// src/user/user.controller.ts
import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO, UpdateUserDTO } from './user.DTO';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  
  @Post()
  async create(@Body() createUserDto: unknown) {
    const parsedData = CreateUserDTO.parse(createUserDto);

    
    const hashedPassword = await bcrypt.hash(parsedData.password, 10);

    
    const birthDate = new Date(parsedData.birthDate);

    const userData: Prisma.UserCreateInput = {
        name: parsedData.name,
        email: parsedData.email,
        password: hashedPassword,
        birthDate: birthDate,
        gender: parsedData.gender,
        address: parsedData.address,
        cep: parsedData.cep,
        cidade: parsedData.cidade,
        bairro: parsedData.bairro, 
        householdSize: parsedData.householdSize,
        wasteTypes: { set: parsedData.wasteTypes },
        preferences: { set: parsedData.preferences },
        wasteFrequency: parsedData.wasteFrequency,
        diyLevel: parsedData.diyLevel,
        availableTime: parsedData.availableTime, 
        profile: parsedData.profile,
      };

    const user = await this.userRepository.createUser(userData);

    const { password, ...result } = user;
    return result;
  }

  
  @Get()
  async getAll() {
    const users = await this.userRepository.getAllUsers();
    return users.map(user => {
      const { password, ...result } = user;
      return result;
    });
  }

  
  @Get(':id')
  async getById(@Param('id') id: string) {
    const user = await this.userRepository.getUserById(id);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    const { password, ...result } = user;
    return result;
  }

  
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: unknown) {
    const parsedData = UpdateUserDTO.parse(updateUserDto);

    
    if (parsedData.password) {
      parsedData.password = await bcrypt.hash(parsedData.password, 10);
    }

    
    if (parsedData.birthDate) {
      parsedData.birthDate = new Date(parsedData.birthDate);
    }

    
    const userData: Prisma.UserUpdateInput = {
      ...parsedData,
      wasteTypes: parsedData.wasteTypes ? { set: parsedData.wasteTypes } : undefined,
      preferences: parsedData.preferences ? { set: parsedData.preferences } : undefined,
    };

    const user = await this.userRepository.updateUser(id, userData);

    const { password, ...result } = user;
    return result;
  }

  
  @Delete(':id')
  async delete(@Param('id') id: string) {
    const user = await this.userRepository.deleteUser(id);
    const { password, ...result } = user;
    return result;
  }
}
