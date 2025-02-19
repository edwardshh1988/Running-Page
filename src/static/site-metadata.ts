interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Edward Running Page',
  siteUrl: 'https://edwardshh.cn/Running-Page/',
  logo: 'https://i.hd-r.icu/4c55534181cc9e63237d6304b07e7b4d.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Strava',
      url: 'https://www.strava.com/athletes/64017555',
    },
    {
      name: 'About',
      url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
