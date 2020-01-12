import { Diseases } from '../models/Diseases.model';
import {Subject} from 'rxjs';
export class DiseaseService
{

    DiseaseChanged = new Subject<Diseases[]>();

    private Disease:Diseases[] = 
    [
       new Diseases('Heart Disease',1),
       new Diseases('Cancer',1),
       new Diseases('Unitentional injury',1),
       new Diseases('Respiratory Disease',1),
       new Diseases('Stork Disease',1),
       new Diseases('Alzheimers Disease',1),
       new Diseases('Diabetes',1),
       new Diseases('Influenza',1),
       new Diseases('Kidney Disease',1),
       new Diseases('Suside',1),




    ]

    getCategories()
    {

        return this.Disease.slice();
    }
}