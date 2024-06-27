import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './entities/post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  create(createPostDto: CreatePostDto) {
    console.log(createPostDto);
    try {
      const post = this.postRepository.create(createPostDto);
      return this.postRepository.save(post);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  findAll() {
    const postList = this.postRepository.createQueryBuilder('post').getMany();
    return postList;
  }

  findOne(id: number) {
    try {
      const post = this.postRepository
        .createQueryBuilder('post')
        .where('post.id = :id', { id: id })
        .getOne();

      return post;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    try {
      const post = this.postRepository
        .createQueryBuilder('post')
        .where('post.id = :id', { id: id })
        .update(updatePostDto)
        .execute()
        .then((result) => {
          return result;
        });

      return post;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  remove(id: number) {
    try {
      const post = this.postRepository
        .createQueryBuilder('post')
        .where('post.id = :id', { id: id })
        .delete()
        .execute();

      return post;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
