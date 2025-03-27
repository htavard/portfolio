import { ESkillCategory } from "@/types/enums"
import { getAssetPath } from '@/utils/paths'

export const skillList: SkillTag[] = [
  {name: 'accessibility', icon: getAssetPath('../pictures/icons/accessibility.png'), category: ESkillCategory.TOOL},
  {name: 'csharp', icon: getAssetPath('../pictures/icons/csharp.png'), category: ESkillCategory.TECHNOLOGY},
  {name: 'css', icon: getAssetPath('../pictures/icons/css.png'), category: ESkillCategory.DESIGN},
  {name: 'figma', icon: getAssetPath('../pictures/icons/figma.png'), category: ESkillCategory.DESIGN},
  {name: 'git', icon: getAssetPath('../pictures/icons/git.png'), category: ESkillCategory.TECHNOLOGY},
  {name: 'html', icon: getAssetPath('../pictures/icons/html.png'), category: ESkillCategory.TECHNOLOGY},
  {name: 'javascript', icon: getAssetPath('../pictures/icons/javascript.png'), category: ESkillCategory.TECHNOLOGY},
  {name: 'jira', icon: getAssetPath('../pictures/icons/jira.png'), category: ESkillCategory.TOOL},
  {name: 'netcore', icon: getAssetPath('../pictures/icons/netcore.png'), category: ESkillCategory.TECHNOLOGY},
  {name: 'nuxt', icon: getAssetPath('../pictures/icons/nuxt.png'), category: ESkillCategory.TECHNOLOGY},
  {name: 'php', icon: getAssetPath('../pictures/icons/php.png'), category: ESkillCategory.TECHNOLOGY},
  {name: 'python', icon: getAssetPath('../pictures/icons/python.png'), category: ESkillCategory.TECHNOLOGY},
  {name: 'sass', icon: getAssetPath('../pictures/icons/scss.png'), category: ESkillCategory.DESIGN},
  {name: 'sql', icon: getAssetPath('../pictures/icons/sql.png'), category: ESkillCategory.TECHNOLOGY},
  {name: 'typescript', icon: getAssetPath('../pictures/icons/typescript.png'), category: ESkillCategory.TECHNOLOGY},
  {name: 'vscode', icon: getAssetPath('../pictures/icons/vscode.png'), category: ESkillCategory.TOOL},
  {name: 'vue', icon: getAssetPath('../pictures/icons/vue.png'), category: ESkillCategory.TECHNOLOGY}
] 