import { Person }    from './Person';

export class FollowUp {

   constructor(
  public status:string,
  public startDate:Date,
  public finishDate:Date,
  public BookIsbn:string,
  public name:string,

  public Personns:Person[]
  ) {  }

}
