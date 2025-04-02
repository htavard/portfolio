import { getAssetPath } from "@/utils/paths"

export const themes: Theme[] = [{
  id: 'fall-theme',
  name: 'fall',
  color: '#F9E0BB',
  framePicture: getAssetPath('../pictures/fall/frameLeaf.png')
},
{
  id: 'winter-theme',
  name: 'winter',
  color: '#121A24',
  framePicture: getAssetPath("../pictures/winter/frameSnowFlake.png")
},
{
  id: 'spring-theme',
  name: 'spring',
  color: '#1b4332  ',
  framePicture: getAssetPath("../pictures/spring/frameSpringLeaf.png")
},
{
  id: 'summer-theme',
  name: 'summer',
  color: '#6a040f  ',
  framePicture: getAssetPath("../pictures/summer/frameSun.png")
}]