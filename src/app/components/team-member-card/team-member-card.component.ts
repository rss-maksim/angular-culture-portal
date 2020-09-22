import { Component, Input } from '@angular/core';
import { TeamMember } from '../../models/team-member.model';

@Component({
  selector: 'app-team-member-card',
  templateUrl: './team-member-card.component.html',
  styleUrls: ['./team-member-card.component.scss']
})
export class TeamMemberCardComponent {
  @Input() public member: TeamMember;
}
