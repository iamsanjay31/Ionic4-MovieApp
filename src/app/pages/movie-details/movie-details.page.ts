import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  information: any;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {

   let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieService.getDetails(id).subscribe((result: null) => {
      console.log('details: ' , result);
      this.information = result;
    });
  }
// (method) MovieDetailsPage.openWebsite(): void
  openWebsite(){
    window.open(this.information.Website, '_blank');
  }

}
