export class PostDataComponent {
  number: number;
  text: string;

  constructor(private http: HttpClient) {
    this.number = 0;
    this.text = '';
  }

  submitData() {
    const data = {
      number: this.number,
      text: this.text
    };

    this.http.post('http://localhost:3000/api/data', data)
      .subscribe(response => {
        console.log('Data submitted successfully', response);
      }, error => {
        console.error('Error submitting data', error);
      });
  }
}