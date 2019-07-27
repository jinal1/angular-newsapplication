import {Action} from '@ngrx/store';
export const enum ActionList
{
LoadSection='LOAD SECTIONS',
LoadSectionNews='LOAD SECTION_NEWS',
FilterSubsection='FILTER SUBSECTION',
FilterSubsectiondone='FILTER SUBSECTION DONE'
}
export class LoadSection implements Action{
public readonly type=ActionList.LoadSection;

}

export class LoadSectionNews implements Action{
public readonly type=ActionList.LoadSectionNews;
constructor(public payload:{se:string,subsections:string[],
newslist:object[]}){}
}
export class FilterSubsection implements Action{
public readonly type=ActionList.FilterSubsection;
constructor(public payload:{subsections:string[],filtersubsection:string,nelist:object[]}){}
}

export type Actions=LoadSection|LoadSectionNews|FilterSubsection;