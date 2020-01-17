import { Subject } from 'rxjs';
import { Category } from '../models/categoer.model';

export class CategoryService
{
    Categories:Category[];

    categoryChanged = new Subject<Category[]>();

    getCategories()
    {

        return this.Categories
    }
    setService(Categories:Category[])
    {   
        this.Categories = Categories;
        this.categoryChanged.next(this.Categories)
    }

}

