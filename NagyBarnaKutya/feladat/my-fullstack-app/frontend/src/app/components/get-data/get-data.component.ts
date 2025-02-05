export class GetDataComponent {
  data: any[] = [];

  constructor(private http: HttpClient) {}

  fetchData() {
    this.http.get('http://localhost:3000/api/data').subscribe((response: any) => {
      this.data = response;
    });
  }
}