import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { userInfo } from 'os';
import { UserService } from 'src/service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getList(@Req() request: Request) {
    console.log('liste user');
    // console.log(request);
    return 'liste';
  }
  @Get('param')
  getListParam(@Query() qparams) {
    console.log(qparams);
    return qparams;
  }
  @Get(':id')
  getOneUser(@Param() parametres) {
    console.log('user');
    return parametres;
  }
  @Post()
  @HttpCode(204)
  addUser() {
    console.log('user ajouteé');
    return 'add';
  }
  @Delete('rem')
  removeUser(@Query() qparams) {
    console.log(qparams);
    return qparams;
  }
  @Put()
  updateUser() {
    console.log('modifUser');
    return 'update';
  }
}
