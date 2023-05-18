import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private course: Course[] = [
    {
      id: '1',
      name: 'NestJS',
      description: 'Fundamentos do NestJS',
      tags: ['nodejs', 'nestjs', 'javascript'],
    },
  ];

  create(createCoursesDTO: any) {
    this.course.push(createCoursesDTO);
  }

  update(id: string, updateCourseDTO: any) {
    const existingCourse = this.course.findIndex(
      (course: Course) => course.id === id,
    );

    this.course[existingCourse] = updateCourseDTO;
  }

  delete(id: string) {
    const existingCourse = this.course.findIndex(
      (course: Course) => course.id === id,
    );

    this.course.splice(existingCourse, 1);
  }

  findAll() {
    return this.course;
  }

  findOne(id: string) {
    return this.course.find((course: Course) => {
      course.id === id;
    });
  }
}
