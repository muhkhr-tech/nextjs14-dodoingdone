import { HiHome, HiListBullet, HiOutlineClipboardDocument, HiOutlineClipboardDocumentCheck, HiOutlineClipboardDocumentList, HiOutlineDocumentText } from "react-icons/hi2";

export default function MenuNavbarBottom() {
    return [
      {
        name: 'HOME',
        path: '/',
        status: '',
        icon: <HiHome size={23}/>
      
      },
      {
        name: 'PROJECTS',
        path: '/projects',
        icon: <HiOutlineClipboardDocument size={23}/>
      
      },
      // {
      //   name: 'DO',
      //   path: '/?status=do',
      //   status: 'do',
      //   icon: <HiOutlineClipboardDocument size={23}/>
      
      // },
      // {
      //   name: 'DOING',
      //   path: '/?status=doing',
      //   status: 'doing',
      //   icon: <HiOutlineClipboardDocumentList size={23}/>
      // },
      // {
      //   name: 'DONE',
      //   path: '/?status=done',
      //   status: 'done',
      //   icon: <HiOutlineClipboardDocumentCheck size={23} />
      // },
      // {
      //   name: 'HISTORY',
      //   path: '/history',
      //   icon: <HiOutlineDocumentText size={23}/>
  
      // }
    ]
  }