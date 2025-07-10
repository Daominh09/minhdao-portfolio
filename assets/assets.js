import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import moffitt_icon from './moffitt-icon.png'
import fpt_icon from './fpt-icon.png'
import usf_icon from './usf-icon.svg'
import pytorch from './pytorch.png'
import huggingface from './huggingface.png'
import opencv from './opencv.png'
import sklearn from './sklearn.png'
import aws from './aws.png'
import postgre from './postgre.png'
import flask from './flask.png'
import react from './react.png'

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    fpt_icon,
    mobile_icon,
    moffitt_icon,
    ui_icon,
    usf_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    pytorch,
    huggingface,
    opencv,
    sklearn,
    aws,
    postgre,
    flask,
    react
};

export const projectData = [
    {
        title: 'STEM Bot',
        description: 'AI chatbot for education',
        bgImage: '/work-1.png',
        link: ''
    },
    {
        title: 'Weather Advisor App',
        description: 'Web Development',
        bgImage: '/work-2.png',
        link: 'https://weather-advisor-app.onrender.com'
    },
    {
        title: 'Task Management App',
        description: 'Web Development',
        bgImage: '/work-3.png',
        link: 'https://task-management-app-mwav.onrender.com/'
    },
]

export const workData = [
    { 
        icon: assets.moffitt_icon, 
        name: "Moffitt Cancer Center",
        title: 'AI/ML Research Intern', 
        date: 'Feb 2025 - Present',
        description: ['Analyzed data from thalassemia patients and utilized machine learning to predict whether they will develop graft-versus-host disease (GVHD) following transplantation.','Scikit-learn, Pandas, Matplotlib, Numpy, Shiny'], 
        link: 'https://lab.moffitt.org/karolak/' 
    },
    { 
        icon: assets.fpt_icon, 
        name: "FPT Software AI Center",
        title: 'AI Engineer Intern', 
        date: 'May 2024 - Aug 2024',
        description: ['Developed a cloud-based text-to-image model that merges multiple faces using fine-tuned UNet mechanisms to boost quality and cut errors by 20%, serving 50,000 users.', 'PyTorch, OpenCV, Stable Diffusion, Flask'], 
        link: 'https://wp.fpt-aic.com/trang-chu/'  
    },
    { 
        icon: assets.usf_icon, 
        name: "USF Computational Biophysics Lab",
        title: 'Research Assistant', 
        date: 'Oct 2024 - Present',
        description: ['Fine-tuned a protein language model to predict ligand binding sites in protein structures, achieving an F1 score of 0.8.', 'PyTorch, Protein Data Bank (PDB) PDB Doctor, ESM2, Pandas, Matplotlib'], 
        link: 'http://labs.cas.usf.edu/cbb/'  
    },
    { 
        icon: assets.usf_icon, 
        name: "Department of Mathematics & Statistics | USF",
        title: 'Peer Leader', 
        date: 'Sep 2024 - May 2025',
        description: ['Assisted professor to host team activities and graded assignment for student'], 
        link: 'https://www.usf.edu/arts-sciences/departments/mathematics-statistics/' 
    },
]


export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Python, C/C++, JavaScript, HTML, CSS' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.S in Computer Science at University of Sout Florida' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Development Field', description: 'AI/ML Model, AI Aplication, Frontend-Devloper' }
];

export const toolsData = [
    assets.vscode,  assets.pytorch, assets.sklearn, assets.aws, assets.postgre, assets.huggingface, assets.opencv, assets.figma, assets.react, assets.git
];

export const publicationData = [
    {
        authors: "Tuan Minh Dao, Taseef Rahman",
        title: "Deep Generative Modeling of Protein Conformations: A Comprehensive Review",
        venue: ""
    },
]
