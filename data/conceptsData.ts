interface Project {
  title: string;
  description: string;
  href?: string;
  imgSrc?: string;
}

const conceptsData: Project[] = [
  {
    title: 'Disgust to Conflict',
    description: `A flowchart showing my understanding of the causal network 
    between disgust expressed online and overt conflict.`,
    imgSrc: '/static/images/projects/neujson/banner.webp',
    href: 'https://senscope.netlify.app/flowchart',
  },
  {
    title: 'Categorical Model Map',
    description: `The Categorical Model of Disgust, visually overlaid on Rozin's Model.`,
    imgSrc: '/static/images/projects/bencode/banner.webp',
    href: 'https://senscope.netlify.app/Model-Map',
  }
];

export default conceptsData;
