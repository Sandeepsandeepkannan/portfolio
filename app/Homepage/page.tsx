import Image from "next/image";

export default function Home() {
  return (
     <div className="h-screen bg-[#0b1a3a]">
     <div className="h-20 w-full   sm:flex justify-between">
              <div className="pt-7  sm:pl-35 sm:pl-25 text-2xl flex"> <span><img className="h-15  ml-5 sm:ml-0  bg-white rounded " src=" https://img.icons8.com/?size=160&id=QJGwqSTZjaKi&format=png" alt="" /></span> <span className="font-semibold  ml-0  sm:ml-0 pt-1 pl-5 sm:pl-4  text-[40px]">Developer</span>  </div>
                <div className="mr-25 pt-7 flex gap-15 text-[17px] font-semibold">
                </div>
        </div>
        <div className="  sm:h-155 lg:flex  border-b ">
                  <div className=" sm:w-190 pt-10  relative">
                      
                    <div className="sm:h-90  text-[55px] text-[30px] mb-10 sm:mb-0 pl-20 sm:pl-50 font-semibold pt-15 pt-15 flex flex-wrap">Hello, <br />I'm K Sandeep  <br />Full Stack Engineer </div>
                    <div className="lg:pt-5 lg:pl-50 pl-5 ">I’m a passionate Full-Stack Developer who enjoys turning ideas into scalable, high-performance web applications.
                          With hands-on experience in React and Next.js, I build real-world projects that focus on clean architecture, modern design, and smooth, intuitive user experiences. I enjoy solving real problems and continuously learning new technologies to improve my craft.
                    </div>
                </div>
                <div className=" bg-[#0b1a3a] "> <div className=" sm:h-100 w-120 pt-5 pb-10 sm:pb-0 sm:mt-15 ml-12 "><span><img className="h-100 w-80 rounded-xl" src="./img.jpeg" alt="" /></span></div> </div>
        </div>

        <div className=" sm:h-170 w-full  bg-[#0b1a3a] border-b">
            <div className="pt-7 pl-10 sm:pl-50 text-[50px] flex"> <span><img className="bg-white h- mt-12 rounded " src="https://img.icons8.com/?size=96&id=Z5Cz9gML8rsf&format=gif&color=f7f7f7" alt="" /></span> <span className="pl-5 pt-16 pr-5"> Skills</span> </div>
            <div className=" sm:h-100 pt-20 ">
            <div className=" p-5 text-black ml-25    m-5 flex gap-6 flex-wrap">

            <div className="h-15 w-40  bg-white flex text-2xl rounded-2xl"> <img className="pl-3 pt-1 h-13" src="https://skillicons.dev/icons?i=react" alt="" /> <span className="pl-2 pt-3">React</span></div>
             <div className="h-15 w-40   bg-white flex text-2xl rounded-2xl"> <img className="pt-1 pl-3 h-13" src="https://skillicons.dev/icons?i=nextjs" alt="" /> <span className="pl-2 pt-3">Nextjs</span></div>
             <div className="h-15 w-50   bg-white flex text-2xl rounded-2xl"> <img className="pt-1 pl-3 h-13" src="https://skillicons.dev/icons?i=typescript" alt="" /> <span className="pl-2 pt-3">Typescript</span></div>
             <div className="h-15 w-50   bg-white flex text-2xl rounded-2xl"> <img className="pt-1 pl-3 h-13" src="https://skillicons.dev/icons?i=javascript" alt="" /> <span className="pl-2 pt-3">Javascript</span></div>

             <div className="h-15 w-45   bg-white flex text-2xl rounded-2xl"> <img className="pt-1 pl-3 h-13" src="https://skillicons.dev/icons?i=express" alt="" /> <span className="pl-2 pt-3">Express</span></div>

             <div className="h-15 w-55   bg-white flex text-2xl rounded-2xl"> <img className="pt-1 pl-3 h-13" src="https://skillicons.dev/icons?i=tailwindcss" alt="" /> <span className="pl-2 pt-3">Tailwindcss</span></div>

             <div className="h-15 w-50   bg-white flex text-2xl rounded-2xl"> <img className="pt-1 pl-3 h-13" src="https://skillicons.dev/icons?i=mongodb" alt="" /> <span className="pl-2 pt-3">MongoDB</span></div>

             <div className="h-15 w-45   bg-white flex text-2xl rounded-2xl"> <img className="pt-1 pl-3 h-13" src="https://skillicons.dev/icons?i=postgres" alt="" /> <span className="pl-2 pt-3">Postgres</span></div>

             <div className="h-15 w-45   bg-white flex text-2xl rounded-2xl"> <img className="pt-1 pl-3 h-13" src="https://skillicons.dev/icons?i=prisma" alt="" /> <span className="pl-2 pt-3">Prisma</span></div>

             <div className="h-15 w-35   bg-white flex text-2xl rounded-2xl"> <img className="pt-1 pl-3 h-13" src="https://skillicons.dev/icons?i=git" alt="" /> <span className="pl-2 pt-3">Git</span></div>
  
             <div className="h-15 w-50   bg-white flex text-2xl rounded-2xl"> <img className="pt-1 pl-3 h-13" src="https://img.icons8.com/?size=160&id=EPbEfEa7o8CB&format=png" alt="" /> <span className="pl-2 pt-3">Postman</span></div>

             <div className="h-15 w-50   bg-white flex text-2xl rounded-2xl"> <img className="pt-1 pl-3 h-13" src="https://img.icons8.com/?size=96&id=0OQR1FYCuA9f&format=png" alt="" /> <span className="pl-2 pt-3">VS code</span></div>

             <div className="h-15 w-45   bg-white flex text-2xl rounded-2xl"> <img className="pt-1 pl-3 h-13" src="https://img.icons8.com/?size=96&id=54087&format=png" alt="" /> <span className="pl-2 pt-3">Nodejs</span></div>
       
             <div className="h-15 w-45   bg-white flex text-2xl rounded-2xl"> <img className="pt-1 pl-3 h-13" src="https://img.icons8.com/?size=96&id=13441&format=png" alt="" /> <span className="pl-2 pt-3">Python</span></div>

             <div className="h-15 w-56   bg-white flex text-2xl rounded-2xl"> <img className="pt-1 pl-3 h-13 rounded-xl" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAb1BMVEX///8jHyAAAAD6+voKAADOzs4fGhs6Ojpvb3AQCQuKiYkVEBEZFBWNjIxYVVYZEhXc3NwyLzBqaGjy8vLm5ubW1tampaUMAAWDg4OTkpJ7enpRTk/s7OxKSUktKSp1dXW8u7ubmpqwsLBfXV5FQkO4Mxq+AAAEj0lEQVR4nO2b4XqiOhRFQ3CgKbQdC7dKRXodef9nvIpVOZBNE5Kjzv2y/7WmdbmA5JyAQoSEhISEhISEhPz/EjuGBerP/skpvzig4rXMHKIkC5V4kpFDkuQfFqpnN6rHdBUFV3+7Kxaq+DFdrR/S1ZcbVfOYrn5zQMWfwZVpXF0xXYNuVPljumI6rz6lUTLgSvG4+nh+McheASomV2bs6DjnGXRV/WGn+kKu0DVYycUNqJCrSOuqkoeZjJ/qE7nS1e3V8SMkqzu6akauqkX3yk1cLQBVPqDanfGTG5xXqDbMm7I/rlpdXknkv+xU0NWq52rXR591BMvfw5QTo6Grt+Xlzyo6ZI6r9WhJ2U8Nx7PoeXXejQbID2uo4YWevU+Oj98R1clVNZ447F3ZQh33SJCrcnTsZrqyhppYcdL6RQ9s62oGFJraD0L0oqxd+Tt8kazQ4bN1ZX2iw+Z6sTu+XoGZzMqVJdSEp91phA9XdlC4sVa78xgP55UVVLyGB2d3HeXuagSVpDVkwp7W/XHYleE6OIKKsrYATOuV7p26T0IbCFdXY6ho1WpdTTaJeU42HREVNWoDpXcVf0JPJyoTV+p5NpTO1Y/NdJIQV/oFxwUqUunA1Q+ejsnVz66coIau8JzZSxIRV7rdXkMosK5TV7AMHlDJn1wZQtUpWPNX2wuVkaeOauBq9K8NoUS5AVsq2fKbKv4y8tRR0dsRm3wmlKiXwJXanKhstiGpq9fZUAdXiKo5UtndCCCuHKBE3Uy4grdMEvDr5krlAiVq6KrFc+YrakylHyhRR6gZwPV4vAe8vqCwKxD1gVceb1DYlf59uyISuPIHZeUq+y5s9a48QuFrcPyul2Jb68onlLmrflGrceUVSpRobidJlv19O82Gh18oQ1fdTsY1o27CM5QoU7A6U6q076oYuvINJeqtiats0pV3KENXGXX1RFYc/1CmrhZ9V7RLZYASZTvjvOq74oASdWvkSpHzqld1sUDNc3WtmXmgTF0leldMUKLcGrlaUleSFwp3XtQVuSdzXnHYoAau1PC/n6l0rvigiCu524CCnLoSnStGqF6Xeqh9CzSl0vOqq/o4oS5dalfTFS1ytSSuDlUfK9R3l6pOdSZ0lTUDV7xQXYV8qX2LFmxRZSm5BvfMUMeq77r5XaASMCNPAcRfzFCieOn/kBq5um5sMUE9kQUuhq4S7RMTPFDvMiO7nwVqLagrTqiuq8sMXWUaKg6o01pGd9Wxq3ZM5R/q0tGNXCXaqLGr1+FQ6Qp1rSUV2b8+uHrTRo5c7ZslTfQiXEI6X+rqfqG9nNrC+203zHD39RFcje82qu3UMzD3YULT4+2i38u8ryt4W/OerooNKAbu6gpTpeX9vmEWo+Ylb1K3tA4zC3SlX/bMoyKHMyBGVK55Gz8U6sGVawbtq6WrLRMVeNj4b3Yl2Fzhh9jv6IpuQARXk1QuM4Mw2lWfQ+XypZuC7QguXa5BtiPo5Aqtzs5UTufVK5srh68CMbpy+YISelrDmcrNlVywROYOVPEvtsyHCgkJCQkJCQkJCbHJf3kyaXRblwfYAAAAAElFTkSuQmCC" alt="" /> <span className="pl-2 pt-3">Websockets</span></div>

            </div>
           </div>
        </div>
         <div className="sm:h-190 bg-[#0b1a3a] pt-10 border-b">
             <div className="sm:h-150  sm:ml-30 w-300 ">   
                    <div className="h-30 pt-5  font-semibold text-[50px] pl-17 flex"> <span><img className="h-20 rounded  pr-5" src="https://img.icons8.com/?size=96&id=IITEAlVNkuAG&format=gif&color=f7f7f7" alt="" /></span> Projects</div>
                    <div className="sm:flex m-10 pt-10 flex-wrap gap-3">

                         <div className="h-100 w-90 ml-0 sm:ml-0 bg-white pt-5 rounded-xl">
                             <div className="h-40 w-80 bg-red-300 ml-5 rounded"><img src="./signup.png" alt="" /></div>
                             <div className="h-55 w-80  m-5 rounded-xl">
                              <div className=" " >

                               <div className="h-13  bg-black  font-bold pl-12 text-[36px] rounded-t-xl">PayTm 
                                      <button  className="pl-5  ">
                                            <a href="https://github.com/Sandeepsandeepkannan/paytm-project"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="rounded-xl text-[25px]   bg-blue-600 h-9 w-20  flex items-center justify-center hover:bg-blue-700 transition">
                                                Link
                                            </a>
                                       </button>
                                </div>

                                <div className="h-10  bg-black  text-white pt-1 pl-3 font-semibold text-[20px]"> ReactJs, ExpressJs, MongoDB</div>
                                </div>
                              <div className="pl-7 bg-black h-26 rounded-b-xl"> A full-stack payment app with user authentication, wallet balance tracking, and secure peer-to-peer transactions, built using modern web technologies.</div>
                             </div>
                         </div>

                         <div className="h-100 w-90 mt-5 sm:mt-0 ml-0 sm:ml-0 bg-white  pt-5 rounded-xl">
                             <div className="h-40 w-80 bg-red-300 ml-5 rounded"><img src="./chatapp.png" alt="" /></div>
                             <div className="h-50 w-80  m-5 rounded-t-xl">
                              <div className=" " >

                                <div className="h-13  bg-black  font-bold pl-7 text-[36px] rounded-t-xl">Chat App 
                                    <button  className="pl-3 " > 
                                        <a
                                            href="https://github.com/Sandeepsandeepkannan/realtime-messaging-app"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-xl text-[25px] bg-blue-600 h-10 w-20  flex items-center justify-center hover:bg-blue-700 transition">
                                            Link

                                         </a>
                                     </button>
                                 </div>  

                                <div className="h-10  bg-black  text-white pt-1 pl-13 font-semibold text-[20px]"> ReactJs, Websockets</div>
                                </div>
                              <div className="pl-7 bg-black h-26 rounded-b-xl"> A real-time chat application with   instant message delivery  and  built   using React  and WebSockets for seamless and low-latency communication.</div>
                             </div>
                         </div>
                        
                         <div className="h-100 w-90 mt-5 sm:mt-0 bg-white ml-0 sm:ml-0 pt-5 rounded-xl">
                             <div className="h-40 w-80 bg-red-300 ml-5 rounded"><img src="./brainly.png" alt="" /></div>
                             <div className="h-50 w-80  m-5 rounded-t-xl">
                              <div className=" " >
                                <div className="h-13  bg-black  font-bold pl-4 text-[36px] rounded-t-xl">Brainly App 
                                     <button className="pl-2">
                                            <a
                                                href="https://github.com/Sandeepsandeepkannan/brainly-app"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="rounded-xl text-[25px] bg-blue-600 h-9 w-20
                                                            flex items-center justify-center
                                                            hover:bg-blue-700 transition"
                                                >
                                                Link
                                             </a>
                                            </button>
                                 </div>
                                <div className="h-10  bg-black  text-white pt-1 pl-3 font-semibold text-[20px]"> ReactJs, ExpressJs, MongoDB</div>
                                </div>
                              <div className="pl-7 bg-black h-26 rounded-b-xl"> A personal knowledge app for saving, organizing, and sharing links, videos, and social media content in one place.</div>
                             </div>
                         </div>
                         

                          
                    </div>
             </div>
        </div>

      <div className=" sm:h-175 w-full bg-[#0b1a3a]  border-b  pt-20"> 
            <div className="sm:h-130 sm:w-full  "> 
                    <div className="sm:h-30 sm:w-full  text-[50px] flex pl-10 sm:pl-55 pt-2 font-semibold "><span><img className="h-20 rounded-xl bg-white " src="https://cdn-icons-png.flaticon.com/128/10019/10019668.png" alt="" /></span>  <span className="pt-3 pl-7">Experience</span> </div>

                    <div className="sm:h-80 sm:w-280  sm:ml-39 mt-10">
                        <span className=" text-[25px] sm:text-[30px] font-semibold pl-20 "> Full Stack Developer  (Intern) </span>

                        <div className="sm:text-[25px] pt-10 p-4  mb-10 sm:mb-0 mt-10 sm:ml-15  h-60 bg-gray-800 sm:w-250 pl-20">  Worked on both frontend and backend development tasks, contributing  <br /> to internal tools and client-facing projects. Gained hands-on experience  <br /> in real-time bug fixing, feature implementation, and collaborative development <br /> within an agile team environment.   </div>

                    </div>
            </div>

      </div>
       
       <div className="h-60 sm:w-full  bg-[#0b1a3a] pt-10">
            <div className="grid grid-cols-2 gap-4 px-4 sm:flex sm:gap-20 sm:ml-35">

         <a
                href="https://docs.google.com/document/d/1RQftBbsseEITHdLH-ZbtylhstxkdXYzhMXVnFIQE1OU/edit"
                target="_blank"
                rel="noopener noreferrer"
               className="h-20 w-50 bg-gray-800 flex rounded cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all">
                <img  className="ml-5 mt-2 h-15 bg-white"
                      src="https://cdn-icons-gif.flaticon.com/19021/19021888.gif"
                      alt="Resume"  />
                <span className="pt-6 pl-2 text-2xl font-semibold">Resume</span>

         </a>
              
              
           <a 
                 href="https://mail.google.com/mail/?view=cm&fs=1&to=sandeepsandeepkannan16@gmail.com" 
                 target="_blank" rel="noopener noreferrer"
                 className="h-20 sm:w-50 bg-gray-800 flex rounded cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all">
                    
                    <img className="ml-5 mt-2 h-15 bg-white"  
                         src="https://cdn-icons-gif.flaticon.com/16075/16075915.gif" 
                         alt="Email"/>
                    <span className="pt-6 pl-2 text-2xl font-semibold">Email</span>

           </a>


            <a 
                  href="https://github.com/Sandeepsandeepkannan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-20 sm:w-50 bg-gray-800 flex rounded cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all" >
                        
                        <img   className="ml-5 rounded-xl mt-2 h-15 bg-white"
                               src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png"
                               alt="GitHub" />
                        <span className="pt-6 pl-2 text-2xl font-semibold">GitHub</span>
             </a>

              <a
                    href="https://www.linkedin.com/in/sandysandeep123/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-20 w-50 bg-gray-800 flex rounded cursor-pointer   hover:bg-gray-700 hover:scale-105 transition-all">
                    <img
                    className="ml-5 mt-2 rounded h-15 bg-white"
                    src="https://cdn-icons-png.flaticon.com/128/14715/14715341.png"
                    alt="LinkedIn"                           />
                    <span className="pt-6 pl-2 text-2xl font-semibold">LinkedIn</span>

             </a>
  

            </div>

      </div>

        </div>
        

        
  );
}
