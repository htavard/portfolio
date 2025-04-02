import { getAssetPath } from "@/utils/paths"

export const themes: Theme[] = [{
  id: 'fall-theme',
  name: 'fall',
  color: '#F9E0BB',
  framePicture: getAssetPath('../pictures/fall/frameLeaf.png'),
  backgroundSelected: '#4a2c2a'
},
{
  id: 'winter-theme',
  name: 'winter',
  color: '#121A24',
  framePicture: getAssetPath("../pictures/winter/frameSnowFlake.png"),
  backgroundSelected: '#E6EDF3'
},
{
  id: 'spring-theme',
  name: 'spring',
  color: '#1b4332  ',
  framePicture: getAssetPath("../pictures/spring/frameSpringLeaf.png"),
  backgroundSelected: '#fee440'
},
{
  id: 'summer-theme',
  name: 'summer',
  color: '#6a040f  ',
  framePicture: getAssetPath("../pictures/summer/frameSun.png"),
  backgroundSelected: '#FFB563'
}]