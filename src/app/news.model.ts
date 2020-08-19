
export class NewsModel
{
  link: string;
  title: string;
  date: string;
  image: string;
  probability: number;


  constructor(link, title, date, image, probability)
  {
    this.link = link;
    this.title = title;
    this.date = date;
    this.image = image;
    this.probability = probability;
  }

}
