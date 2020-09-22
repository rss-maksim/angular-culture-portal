import { Component } from '@angular/core';
import { TeamMember } from '../../models/team-member.model';
import { teamMembers } from '../../constants/team-members.const';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})

export class TeamComponent {
  public team: TeamMember[] = teamMembers;
}
