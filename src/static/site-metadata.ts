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
  logo: 'https://pic1.imgdb.cn/item/67b59687d0e0a243d400c03a.jpg',
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
