import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  create(createTodoDto: CreateTodoDto) {
    return this.prisma.todo.create({
      data: {
        ...createTodoDto
      },
    });
  }

  findAll() {
    return this.prisma.todo.findMany({
      orderBy: {
        id: "asc",
      }
    });
  }

  remove(id: number) {
    return this.prisma.todo.delete({
      where: {
        id,
      },
    });
  }

  async updateTask(id: number, updateTodoDto: UpdateTodoDto) {
    return this.prisma.todo.update({
      where: {
        id,
      },
      data: {
        ...updateTodoDto,
      },
    });
  }
}
