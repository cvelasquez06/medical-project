import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IconTrash2,
  IconSave,
  IconEdit,
  IconShoppingCart,
  IconActivity,
  IconFilePlus,
  IconHome,
  IconFile,
  IconFileText,
  IconUser,
  IconBarChart2,
  IconHeart,
  IconUsers,
  IconLayers,
  IconPlusCircle,
  IconCalendar,
  IconLogOut,
  IconGlobe,
  IconDownload,
  IconList,
  IconChevronDown, IconChevronRight, IconShoppingBag
} from 'angular-feather';

const icons = [
  IconHome,
  IconFile,
  IconShoppingCart,
  IconUser,
  IconBarChart2,
  IconSave,
  IconTrash2,
  IconEdit,
  IconShoppingCart,
  IconActivity,
  IconFilePlus,
  IconHeart,
  IconFileText,
  IconUsers,
  IconLayers,
  IconPlusCircle,
  IconCalendar,
  IconLogOut,
  IconGlobe,
  IconDownload,
  IconFilePlus,
  IconList,
  IconChevronDown,
  IconChevronRight,
  IconShoppingBag
];

@NgModule({
  imports: [
    CommonModule,
    icons
  ],
  exports: [
    icons
    ],
  declarations: []
})
export class IconsModule { }

