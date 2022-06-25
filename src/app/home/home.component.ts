import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';
import { TeamService } from '../team.service';

export interface IStaff {
  id?: number;
  first?: string;
  last?: string;
  handle?: string;
  teamId?: number;
}

export interface ITeam {
  id?: number;
  class?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public staffs: IStaff[] = [];
  public teams: ITeam[] = [];
  constructor(
    private staffService: StaffService,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.staffService.getAll().subscribe((data) => {
      this.staffs = data;
      console.log(this.staffs);
    });
    this.teamService.getAll().subscribe((data) => {
      this.teams = data;
      console.log(this.teams);
    });
  }
}
