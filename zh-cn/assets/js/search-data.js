
const currentUrl = window.location.href;
const siteUrl = "https://plmyann.github.io"; 
let updatedUrl = currentUrl.replace("https://plmyann.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("zh-cn".length > 0) {
  updatedUrl = updatedUrl.replace("/zh-cn", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-首页",
    title: "首页",
    section: "导航栏",
    handler: () => {
      window.location.href = "/zh-cn/";
    },
  },{id: "nav-团队",
          title: "团队",
          description: "membros do grupo de pesquisa ou laboratório",
          section: "导航栏",
          handler: () => {
            window.location.href = "/zh-cn/team/";
          },
        },{id: "nav-发表",
          title: "发表",
          description: "按年份倒序，*为通讯作者",
          section: "导航栏",
          handler: () => {
            window.location.href = "/zh-cn/publications/";
          },
        },{id: "nav-机会",
          title: "机会",
          description: "Materiais de cursos que você ministrou. Substitua esse texto com sua descrição.",
          section: "导航栏",
          handler: () => {
            window.location.href = "/zh-cn/opportunities/";
          },
        },{id: "nav-联系",
          title: "联系",
          description: "Esta é uma descrição da página. Você pode modificá-la em &#39;_pages/cv.md&#39;. Também pode alterar ou remover o botão no topo de download de pdf.",
          section: "导航栏",
          handler: () => {
            window.location.href = "/zh-cn/contact/";
          },
        },{id: "news-um-anúncio-simples-em-uma-linha",
          title: 'Um anúncio simples em uma linha.',
          description: "",
          section: "新闻",},{id: "news-um-anúncio-longo-com-detalhes",
          title: 'Um anúncio longo com detalhes',
          description: "",
          section: "新闻",handler: () => {
              window.location.href = "/zh-cn/news/zh-cn/announcement_2/";
            },},{id: "news-um-anúncio-simples-em-uma-linha-com-markdown-emoji-sparkles-smile",
          title: 'Um anúncio simples em uma linha com Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "新闻",},{
          id: 'lang-en-uk',
          title: 'en-uk',
          section: '语言',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: '日间模式',
      description: '日间模式',
      section: '主题',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: '夜间模式',
      description: '夜间模式',
      section: '主题',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: '系统模式（默认）',
      description: '系统模式（默认）',
      section: '主题',
      handler: () => {
        setThemeSetting("system");
      },
    },];
