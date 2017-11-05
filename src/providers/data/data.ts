import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataProvider {
//todos: string[] = [];
todos: any;
withperson: any;
activities: any;


  constructor(public http: HttpModule) {
    console.log('Hello DataProvider Provider');

    this.todos = [];
    this.withperson = [];

    this.activities = [
      {
        id: 1,
        activity: 'Organizing a day camp with Family Summer Olympics games',
        image: "img/olympic.jpg",
        text: "Such a great excuse to spend some fun quality time with loved ones. Family members competitive spirit is put to it’s test with a variety of backyard games and competitions, including water balloon relays, jumbo beer pong, slosh ball and so much more!",
        content: {
          title: "Family Summer Olympics games",
          img:"img/olym1.JPG",
          age: "age range",
          des: "GOAL: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
          instructions: "Instruction> Lorem ipsum dolor sit amet, ad ius velit homero, nonumy aliquam eam ad, cu ius iusto saepe oratio. Ad mel audiam dolorem dolores, vim ex quas ferri assueverit, at sit agam atqui graece. Eu quando atomorum assueverit nam, usu malorum assentior at. Similique deterruisset ne mea, no possim vocent audiam pro. Nec id purto dissentias cotidieque.",
          tools: ""
        },
        keywords: "summer, backyard, outdoor, game, games, camp, camping, organize, olympics, olympic"
      },

      {
        id: 2,
        activity: 'DIY LADDER GOLF: THE PERFECT OUTDOOR PARTY GAME',
        image: "img/lele.jpg",
        text: "Ladder Golf is a great outdoor game. Play it with your family or with a crowd. This game is perfect for parties. Just promise me no crying hysterically if you lose.",
        content: {
          title: "Ladder golf",
          img:"img/golflad1.JPEG",
          age: "age range",
          des: "GOAL: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
          instructions: "Instruction> Lorem ipsum dolor sit amet, ad ius velit homero, nonumy aliquam eam ad, cu ius iusto saepe oratio. Ad mel audiam dolorem dolores, vim ex quas ferri assueverit, at sit agam atqui graece. Eu quando atomorum assueverit nam, usu malorum assentior at. Similique deterruisset ne mea, no possim vocent audiam pro. Nec id purto dissentias cotidieque.",
          tools: ""
        },
        keywords: "summer, spring, autumn, fall, game, games, party, parties, diy, ladder, golf, outdoor"
      },

      {
        id: 3,
        activity: 'Idea Snow-Themed Crafts',
        image: "img/snowcraft.jpg",
        text: "Do you have the winter blues? Bust your cabin-fever by having a little fun with snow. Create some wintry crafts and make some goodies that incorporate that fluffy white stuff we all love this time of year.",
        content: {
          title: "Snow craft",
          img:"img/no_image.JPEG",
          age: "age range",
          des: "GOAL: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
          instructions: "Instruction> Lorem ipsum dolor sit amet, ad ius velit homero, nonumy aliquam eam ad, cu ius iusto saepe oratio. Ad mel audiam dolorem dolores, vim ex quas ferri assueverit, at sit agam atqui graece. Eu quando atomorum assueverit nam, usu malorum assentior at. Similique deterruisset ne mea, no possim vocent audiam pro. Nec id purto dissentias cotidieque.",
          tools: ""
        },
        keywords: "winter, craft, crafts, snow, theme, outdoor, decoration, decor"
      },
      {
        id: 4,
        activity: '17 Functional DIY Camping Hacks to Make Your Outdoor Experience Less Expensive Today',
        image: "img/camp.jpg",
        text: "Find out the collection of simple DIY camping hacks extremely useful in making your outdoors experience less expensive and more enjoyable. Try them and watch your fellow campers turn green with envy.",
        content: {
          title: "DIY Camping Hacks",
          img:"img/no_image.JPG",
          age: "age range",
          des: "GOAL: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
          instructions: "Instruction> Lorem ipsum dolor sit amet, ad ius velit homero, nonumy aliquam eam ad, cu ius iusto saepe oratio. Ad mel audiam dolorem dolores, vim ex quas ferri assueverit, at sit agam atqui graece. Eu quando atomorum assueverit nam, usu malorum assentior at. Similique deterruisset ne mea, no possim vocent audiam pro. Nec id purto dissentias cotidieque.",
          tools: ""
        },
        keywords: "camping, camp, summer, spring, autumn, fall, diy, hacks, hack, outdoor, tip, tips"
      },
      {
        id: 5,
        activity: 'Recycled Bottle Bowling',
        image: "img/bowling.jpg",
        text: "A hit of the neighborhood, turn the backyard into your very own bowling alley with our recycled bottle bowling craft! With a little paint and some rescued bottles, you’ll soon have an easy DIY game everyone in the family will love.",
        content: {
          title: "Bowling time",
          img:"img/no_image.JPG",
          age: "age range",
          des: "GOAL: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
          instructions: "Instruction> Lorem ipsum dolor sit amet, ad ius velit homero, nonumy aliquam eam ad, cu ius iusto saepe oratio. Ad mel audiam dolorem dolores, vim ex quas ferri assueverit, at sit agam atqui graece. Eu quando atomorum assueverit nam, usu malorum assentior at. Similique deterruisset ne mea, no possim vocent audiam pro. Nec id purto dissentias cotidieque.",
          tools: ""
        },
        keywords: "summer, spring, autumn, fall, craft, crafts, outdoor, bowling, bottle"
      },
      {
        id: 6,
        activity: 'De Finibus Bonorum et Malorum',
        image: "img/powerranger.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        content: {
          title: "Lorem Ipsum",
          img:"img/no_image.JPG",
          age: "age range",
          des: "GOAL: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
          instructions: "Instruction> Lorem ipsum dolor sit amet, ad ius velit homero, nonumy aliquam eam ad, cu ius iusto saepe oratio. Ad mel audiam dolorem dolores, vim ex quas ferri assueverit, at sit agam atqui graece. Eu quando atomorum assueverit nam, usu malorum assentior at. Similique deterruisset ne mea, no possim vocent audiam pro. Nec id purto dissentias cotidieque.",
          tools: ""
        },
        keywords: "Lorem ipsum dolor"
      }

  ];

  }

  //loadAll() method which simply returns this activities array variable as promise.
  loadAll(){
        return Promise.resolve(this.activities);
  };

  loadingAll(){
        return Promise.resolve(this.todos);
  };
  loadwithperson(){
        return Promise.resolve(this.withperson);

  };
  //return the matching id’s object as promise.
  getByID(id){
    for(var i=0; i< (this.activities).length; i++)
    {
      if(this.activities[i].id == id)
      {
        return Promise.resolve(this.activities[i]);
      }
    }
  };

  filterItems(searchTerm){

           return this.activities.filter((activity) => {
               return activity.keywords.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
           });

       }

}
