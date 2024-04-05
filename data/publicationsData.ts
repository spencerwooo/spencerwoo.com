interface Project {
  title: string
  description: string
  authors: string
  href: string
  imgSrc: string
  tag?: string
  tagColor?: string
  publisher: string
  publishDate: string
}

const projectsData: Project[] = [
  {
    title: '*Towards transferable adversarial attacks with centralized perturbation',
    description:
      'A transferable adversarial attack via dynamic, fine-grained centralization of perturbation on dominating frequency coefficients.',
    authors: 'Shangbo Wu*, Yu-an Tan, Yajie Wang, Ruinan Ma, Wencong Ma, Yuanzhang Li^',
    href: 'https://doi.org/10.1609/aaai.v38i6.28427',
    imgSrc: '/static/images/centralized-perturbation.jpg',
    tag: 'AAAI-24',
    tagColor: '#0284c7',
    publisher: 'Proceedings of the AAAI Conference on Artificial Intelligence',
    publishDate: 'March 2024',
  },
  {
    title: 'Toward feature space adversarial attack in the frequency domain',
    description: 'Attacking in the feature space via spectral transformation.',
    authors: 'Yajie Wang*, Yu-an Tan, Haoran Lyu, Shangbo Wu, Yuhang Zhao, Yuanzhang Li^',
    href: 'https://doi.org/10.1002/int.23031',
    imgSrc: '/static/images/feature-space-attack.png',
    publisher: 'International Journal of Intelligent Systems',
    publishDate: 'Aug 2022',
  },
  {
    title:
      '*Demiguise attack: Crafting invisible semantic adversarial perturbations with perceptual similarity',
    description:
      'Leveraging perceptual similarity to craft adversarial perturbation that is invisible to humans.',
    authors: 'Yajie Wang*, Shangbo Wu*, Wenyi Jiang, Shengang Hao, Yu-an Tan, Quanxin Zhang^',
    href: 'https://doi.org/10.24963/ijcai.2021/430',
    imgSrc: '/static/images/demiguise-attack.png',
    tag: 'IJCAI-21',
    tagColor: '#ec4899',
    publisher: 'International Joint Conference on Artificial Intelligence',
    publishDate: 'July 2021',
  },
]

export default projectsData
