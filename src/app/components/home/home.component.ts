import { Component, HostListener, OnInit ,ElementRef, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExerciseEntry, ITodo, Iarray } from 'src/models/todo.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export default class HomeComponent implements OnInit{
  renderer: any;
  inputValue: string='';
  TodoForm!:FormGroup
  Todoarray!:FormGroup
  anuals:string='';
  todos:ITodo[]=[]
  list:Iarray[]=[];
  messages:string[]=[];
  currentMessage!:'';
  // exerciseList: string[] = [];
  exerciseList:ExerciseEntry[]=[];
  addedEntries: Set<string> = new Set<string>();
  constent:Iarray[]=[];
  constructor(private elementRef:ElementRef,private fb:FormBuilder){}
true:Boolean=false

  ngOnInit(): void {
this.selected=new Date()
   this.TodoForm=this.fb.group({
    title:['',[Validators.required]],
    date:[''],
    description:[''],
  })
this.datafetch();


  }
datafetch(){
  this.Todoarray=this.fb.group({
    dates:['',[Validators.required]],
    content:['',[Validators.required]],
    dailyroute:['']
  })
}

  selected!: Date | null;


  truelement:boolean=false

  onclick(data:boolean){
  this.truelement=!data
  }
  isBar = false


  barFunction(){

    this.isBar=!this.isBar

  }
  isShowDiv = false;
toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }

  isFar=true
  block(){
    this.isFar=!this.isFar
  }
  // onFormClick(event: MouseEvent) {
  //   // Stop the event propagation to prevent the div from closing when clicking inside the form
  //   event.stopPropagation();
  // }

  // onInputKeyDown(event: KeyboardEvent) {
  //   // Prevent the form from closing when pressing the space bar inside the input box
  //   if (event.key === ' ') {
  //     event.preventDefault();
  //   }
  // }
  // @HostListener('document:click', ['$event'])
  // onDocumentClick(event: MouseEvent) {
  //   // Close the form when clicking outside
  //   this.isShowDiv = false;
  // }
  // @HostListener('document:click', ['$event'])
  // onDocumentClick(event: MouseEvent) {
  //   // Close the form only if the click is outside the form and not on the input box
  //   const clickedInside = this.E.nativeElement.contains(event.target);
  //   if (!clickedInside) {
  //     this.isShowDiv = false;
  //   }
  // }

  // onInputBlur() {
    // Close the form when the input box loses focus
    // this.isShowDiv = false;
  // }

  // onInputChange( ) {
  //   // console.log(this.inputValue); // Log the value from the input box when it changes
  // }

  // onKeyPress(){
  //   this.enteredvalue=
  //   this.inputValue=''
  //   console.log(this.enteredvalue);

  // }

submit(){
  if(this.TodoForm.invalid){
   return alert('please add title')

  }
  console.log(this.TodoForm.value);
  const {title,date,description} = this.TodoForm.value
 let todo:ITodo = {
    title,
    date,
    description

  };

  this.todos.push(todo)
  this.toggleDisplayDiv()
  this.TodoForm.reset()
}
task(){

  console.log(this.Todoarray.value);
const {dates,content,dailyroute}=this.Todoarray.value
let lists:Iarray={
  dates,
  content,
dailyroute
}
this.list.push(lists)
this.block()
this.Todoarray.reset()
}


// sendmessage(){
//   if(this.currentMessage.trim()!==''){
//     this.messages.push(this.currentMessage.trim());

//   }this.currentMessage='';
// }
// @HostListener('document:keydown.enter', ['$event'])
// @ViewChild('messageInput') messageInput!: ElementRef<HTMLInputElement>;

// onEnterKey(event: KeyboardEvent) {
//   event.preventDefault(); // Prevent the default enter key behavior (form submission)
//   if (this.currentMessage.trim() !== '') {
//     this.messages.push(this.currentMessage.trim());
//     this.currentMessage = ''; // Clear the input field after adding to the list
//   }
// }

// @ViewChild('messageInput') messageInput!: ElementRef<HTMLInputElement>;

// addMessage() {
//   const trimmedMessage = this.currentMessage.trim();
//   if (trimmedMessage !== '') {
//     this.messages.push(trimmedMessage);
//     this.currentMessage = ''; // Clear the input field after adding to the list
//   }
// }

addExerciseEntry(): void {
  const dailyroute = this.Todoarray.get('dailyroute')?.value;
  if (dailyroute && dailyroute.trim() !== '') {
    this.checkAndAddExercise();
  }
}

checkAndAddExercise(): void {
  const dailyroute = this.Todoarray.get('dailyroute')?.value;
  if (dailyroute && dailyroute.trim() !== '') {
    const lines = dailyroute.split('\n'); // Split input by newline characters
    for (const line of lines) {
      const [exercise, sets, repetitions] = line.split(' ');
      const exerciseKey = `${exercise}-${sets}-${repetitions}`;
      if (!this.addedEntries.has(exerciseKey)) {
        const newExerciseEntry: ExerciseEntry = {
          exercise: exercise,
          sets: parseInt(sets, 10),
          repetitions: parseInt(repetitions, 10),
        };
        this.exerciseList.push(newExerciseEntry);
        this.addedEntries.add(exerciseKey); // Add the exercise entry key to the set to mark it as added
        console.log(exerciseKey);
        console.log(this.exerciseList);


      }
    }
    this.Todoarray.get('dailyroute')?.reset(); // Clear the input field after adding to the list
  }
}




}
