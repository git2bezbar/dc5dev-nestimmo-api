import { CategoryEntity } from 'src/category/entities/category.entity';

export class CreatePostDto {
  title: string;
  description: string;
  category: CategoryEntity;
}
