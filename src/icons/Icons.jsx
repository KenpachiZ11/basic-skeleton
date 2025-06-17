import React from 'react';

import {
  wrapper
} from './Icons.module.scss';

import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkRemoveOutlinedIcon from '@mui/icons-material/BookmarkRemoveOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SearchOffOutlinedIcon from '@mui/icons-material/SearchOffOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import EventIcon from '@mui/icons-material/Event';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export const Icons = ({
  icon_name,
  cb,
  style
}) => {
  let icon = null;

  switch (icon_name) {
    case 'arrow_up':
      icon = <ArrowDropUpOutlinedIcon />;
      break;
    case 'arrow_down':
      icon = <ArrowDropDownOutlinedIcon />;
      break;
    case 'arrow_right':
      icon = <ArrowRightOutlinedIcon />;
      break;
    case 'arrow_left':
      icon = <ArrowLeftOutlinedIcon />;
      break;
    case 'closed':
      icon = <CloseOutlinedIcon />;
      break;
    case 'closed_fullscreen':
      icon = <FullscreenExitOutlinedIcon />;
      break;
    case 'open_fullscreen':
      icon = <FullscreenOutlinedIcon />;
      break;
    case 'add':
      icon = <AddOutlinedIcon />;
      break;
    case 'clear':
      icon = <ClearOutlinedIcon />;
      break;
    case 'delete':
      icon = <DeleteOutlineOutlinedIcon />;
      break;
    case 'setting':
      icon = <SettingsOutlinedIcon />;
      break;
    case 'download_cloud':
      icon = <CloudDownloadOutlinedIcon />;
      break;
    case 'table_list':
      icon = <ListOutlinedIcon />;
      break;
    case 'table_grid':
      icon = <GridViewOutlinedIcon />;
      break;
    case 'help_info':
      icon = <HelpOutlineOutlinedIcon />;
      break;
    case 'info':
      icon = <InfoOutlinedIcon />;
      break;
    case 'camera':
      icon = <CameraAltOutlinedIcon />;
      break;
    case 'add_favorite':
      icon = <BookmarkAddOutlinedIcon />;
      break;
    case 'remove_favorite':
      icon = <BookmarkRemoveOutlinedIcon />;
      break;
    case 'search':
      icon = <SearchOutlinedIcon />;
      break;
    case 'remove_search':
      icon = <SearchOffOutlinedIcon />;
      break;
    case 'done':
      icon = <DoneOutlinedIcon />;
    case 'account':
      icon = <AccountCircleIcon />;
      break;
    case 'sort':
      icon = <SortIcon />;
      break;
    case 'filter':
      icon = <FilterAltIcon />;
      break;
    case 'events':
      icon = <EventIcon />;
      break;
    case 'list':
      icon = <FormatListBulletedIcon />;
      break;
  
    default:
      icon;
      break;
  }

  return <div
    className={wrapper}
    onClick={cb}
    // style={style}
  >
    <span> { icon } </span>
  </div>
}