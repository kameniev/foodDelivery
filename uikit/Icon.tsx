import React from 'react'
import Home from 'assets/icons/home.svg'
import Market from 'assets/icons/market.svg'
import Search from 'assets/icons/search.svg'
import Profile from 'assets/icons/profile.svg'
import HomeOutline from 'assets/icons/home-outline.svg'
import MarketOutline from 'assets/icons/market-outline.svg'
import SearchOutline from 'assets/icons/search-outline.svg'
import ProfileOutline from 'assets/icons/profile-outline.svg'
import Heart from 'assets/icons/Heart.svg'
import Stars0 from 'assets/icons/stars0.svg'
import Stars1 from 'assets/icons/stars1.svg'
import Stars2 from 'assets/icons/stars2.svg'
import Stars3 from 'assets/icons/stars3.svg'
import Stars4 from 'assets/icons/stars4.svg'
import Stars5 from 'assets/icons/stars5.svg'
import Clock from 'assets/icons/Clock.svg'
import Separator from 'assets/icons/separator.svg'
import SettingFav from 'assets/icons/settingFav.svg'
import SettingInfo from 'assets/icons/settingInfo.svg'
import SettingList from 'assets/icons/settingList.svg'
import SettingProfile from 'assets/icons/settingProfile.svg'
import SettingSettings from 'assets/icons/settingSettings.svg'
import Pointer from 'assets/icons/pointer.svg'
import List from 'assets/icons/list.svg'

const Icons = {
  Home: Home,
  Market: Market,
  Search: Search,
  Profile: Profile,
  HomeOutline: HomeOutline,
  MarketOutline: MarketOutline,
  SearchOutline: SearchOutline,
  ProfileOutline: ProfileOutline,
  Heart: Heart,
  Stars0: Stars0,
  Stars1: Stars1,
  Stars2: Stars2,
  Stars3: Stars3,
  Stars4: Stars4,
  Stars5: Stars5,
  Clock: Clock,
  Separator: Separator,
  SettingFav: SettingFav,
  SettingInfo: SettingInfo,
  SettingList: SettingList,
  SettingProfile: SettingProfile,
  SettingSettings: SettingSettings,
  Pointer: Pointer,
  List: List,
}

export type IconName = keyof typeof Icons

type IconProps = {
  name: IconName
  width?: number
  fill?: string
}

class Icon extends React.Component<IconProps> {
  render() {
    const SelectedIcon = Icons[this.props.name]

    return <SelectedIcon width={this.props.width} fill={this.props.fill} />
  }
}

export default Icon
