interface Project {
  title: string
  description: string
  authors: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '*Towards transferable adversarial attacks with centralized perturbation',
    description:
      'A transferable adversarial attack via dynamic, fine-grained centralization of perturbation on dominating frequency coefficients. (March 24, 2024)',
    authors: 'Shangbo Wu*, Yu-an Tan, Yajie Wang, Ruinan Ma, Wencong Ma, Yuanzhang Li',
    href: 'https://doi.org/10.1609/aaai.v38i6.28427',
    imgSrc: '/static/images/centralized-perturbation.jpg',
  },
  {
    title: 'Toward feature space adversarial attack in the frequency domain',
    description: 'Attacking in the feature space via spectral transformation. (Aug 29, 2022)',
    authors: 'Yajie Wang*, Yu-an Tan, Haoran Lyu, Shangbo Wu, Yuhang Zhao, Yuanzhang Li',
    href: 'https://doi.org/10.1002/int.23031',
    imgSrc: '/static/images/feature-space-attack.png',
  },
  {
    title:
      '*Demiguise attack: Crafting invisible semantic adversarial perturbations with perceptual similarity',
    description:
      'Leveraging perceptual similarity to craft adversarial perturbations that are invisible to humans. (July 3, 2021)',
    authors: 'Yajie Wang*, Shangbo Wu*, Wenyi Jiang, Shengang Hao, Yu-an Tan, Quanxin Zhang',
    href: 'https://doi.org/10.24963/ijcai.2021/430',
    imgSrc: '/static/images/demiguise-attack.png',
  },
]

export default projectsData
