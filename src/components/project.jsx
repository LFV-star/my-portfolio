import { useState } from 'react'
import edutrackImg from '../assets/edutrack.png'

const pythonCode = `students = []

def add_student():
    name = input("Enter student name: ")
    id = input("Enter student ID: ")
    grades = []
    for i in range(3):
        grade = float(input(f"Enter grade {i+1}: "))
        grades.append(grade)
    average = sum(grades) / len(grades)
    status = "Passed" if average >= 75 else "Failed"
    students.append({"name": name, "id": id, "grades": grades, "average": average, "status": status})
    print(f"Student {name} added successfully!")

def view_students():
    if not students:
        print("No students found.")
        return
    print("--- Student List ---")
    for i, s in enumerate(students):
        print(f"{i+1}. {s['name']} | ID: {s['id']} | Average: {s['average']:.2f} | Status: {s['status']}")

def top_students():
    if not students:
        print("No students found.")
        return
    sorted_students = sorted(students, key=lambda x: x['average'], reverse=True)
    print("--- Top Students ---")
    for i, s in enumerate(sorted_students[:3]):
        print(f"{i+1}. {s['name']} | Average: {s['average']:.2f}")

def delete_student():
    view_students()
    if not students:
        return
    index = int(input("Enter student number to delete: ")) - 1
    if 0 <= index < len(students):
        removed = students.pop(index)
        print(f"Student {removed['name']} deleted.")
    else:
        print("Invalid number.")

def menu():
    while True:
        print("===== Student Information System =====")
        print("1. Add Student")
        print("2. View All Students")
        print("3. Top Performing Students")
        print("4. Delete Student")
        print("5. Exit")
        choice = input("Choose an option: ")
        if choice == '1': add_student()
        elif choice == '2': view_students()
        elif choice == '3': top_students()
        elif choice == '4': delete_student()
        elif choice == '5':
            print("Goodbye!")
            break
        else:
            print("Invalid choice.")

menu()`

const cppCode = `#include <iostream>
#include <string>
using namespace std;

void showClasses() {
    cout << "--- DeadRails Classes ---" << endl;
    cout << "1. Gunslinger  - High damage, low defense." << endl;
    cout << "2. Brawler     - High defense, melee specialist." << endl;
    cout << "3. Medic       - Support class. Can heal teammates." << endl;
    cout << "4. Engineer    - Builds structures and turrets." << endl;
    cout << "5. Scout       - Fast movement, great for recon." << endl;
}

void showWeapons() {
    cout << "--- DeadRails Weapons ---" << endl;
    cout << "1. Revolver    - Standard sidearm. Reliable." << endl;
    cout << "2. Shotgun     - High close-range damage." << endl;
    cout << "3. Rifle       - Long range precision." << endl;
    cout << "4. Dynamite    - Area of effect explosive." << endl;
    cout << "5. Knife       - Silent melee weapon." << endl;
}

void showMaps() {
    cout << "--- DeadRails Maps ---" << endl;
    cout << "1. Ghost Town     - Abandoned western settlement." << endl;
    cout << "2. Desert Outpost - Sandy terrain, limited cover." << endl;
    cout << "3. Mine Shaft     - Dark underground tunnels." << endl;
    cout << "4. Train Station  - Multiple platforms." << endl;
    cout << "5. Fort Deadwood  - Fortified base with towers." << endl;
}

void showModes() {
    cout << "--- DeadRails Game Modes ---" << endl;
    cout << "1. Survival    - Last team standing wins." << endl;
    cout << "2. Escort      - Protect or destroy the train." << endl;
    cout << "3. Elimination - First to reach kill limit wins." << endl;
    cout << "4. Capture     - Control zones across the map." << endl;
}

int main() {
    int choice;
    do {
        cout << "====== DeadRails Info System ======" << endl;
        cout << "1. Classes" << endl;
        cout << "2. Weapons" << endl;
        cout << "3. Maps" << endl;
        cout << "4. Game Modes" << endl;
        cout << "0. Exit" << endl;
        cout << "Choose an option: ";
        cin >> choice;
        switch(choice) {
            case 1: showClasses(); break;
            case 2: showWeapons(); break;
            case 3: showMaps(); break;
            case 4: showModes(); break;
            case 0: cout << "Goodbye!" << endl; break;
            default: cout << "Invalid choice." << endl;
        }
    } while(choice != 0);
    return 0;
}`

const projects = [
  {
    title: 'Penflow',
    description: 'A web application that converts uploaded documents into handwriting style. Users can upload PDF or DOCX files, customize the handwriting font and size, and download the result.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    status: 'Completed',
    github: 'https://github.com/LFV-star/PenFlow',
    color: '#d4e8d0',
    type: 'construction',
  },
  {
    title: 'Python Student Information Management System',
    description: 'A system that manages and organizes student data using different data structures and algorithms. Features include adding, updating, and deleting student records.',
    tech: ['Python'],
    status: 'Completed',
    github: 'https://github.com/LFV-star',
    color: '#d0dff5',
    type: 'code',
    language: 'Python',
    code: pythonCode,
  },
  {
    title: 'DeadRails Info System',
    description: 'A console-based information system that provides organized data about the Roblox game DeadRails. Features interactive menu navigation and organized sections.',
    tech: ['C++'],
    status: 'Completed',
    github: 'https://github.com/LFV-star',
    color: '#f5d0d0',
    type: 'code',
    language: 'C++',
    code: cppCode,
  },
  {
    title: 'EduTrack - Student Management System',
    description: 'A web application designed to manage student records and academic information. Features student registration, profile management, and CRUD operations.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'PHP'],
    status: 'In Progress',
    github: 'https://github.com/LFV-star',
    color: '#f5ecd0',
    type: 'image',
    image: edutrackImg,
  },
]

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner observe">

        <span className="section-label">What I've Built</span>
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className="project-card" key={i}>

              <div
                className="project-banner"
                style={{ background: project.type === 'code' ? '#1e1e1e' : project.color }}
              >
                {project.type === 'construction' && (
                  <div className="construction-banner">
                    <span>🚧</span>
                    <p>Under Construction</p>
                  </div>
                )}
                {project.type === 'code' && (
                  <div className="code-preview-banner">
                    <div className="code-preview-topbar">
                      <span className="code-dot red"></span>
                      <span className="code-dot yellow"></span>
                      <span className="code-dot green"></span>
                      <span style={{ fontSize: '11px', color: '#aaa', marginLeft: '8px', fontFamily: 'Courier New' }}>
                        {project.language === 'Python' ? 'main.py' : 'main.cpp'}
                      </span>
                    </div>
                    {project.language === 'Python' ? (
                      <>
                        <p className="code-preview-line comment"># Student Information System</p>
                        <p className="code-preview-line keyword">def add_student():</p>
                        <p className="code-preview-line">    name = input("Enter name: ")</p>
                        <p className="code-preview-line keyword">def view_students():</p>
                        <p className="code-preview-line output">✅ Student added successfully!</p>
                      </>
                    ) : (
                      <>
                        <p className="code-preview-line comment">// DeadRails Info System</p>
                        <p className="code-preview-line keyword">#include &lt;iostream&gt;</p>
                        <p className="code-preview-line">void showClasses() {'{'}</p>
                        <p className="code-preview-line">    cout &lt;&lt; "Gunslinger";</p>
                        <p className="code-preview-line output">====== DeadRails ======</p>
                      </>
                    )}
                  </div>
                )}
                {project.type === 'image' && (
                  <img src={project.image} alt={project.title} className="banner-image" />
                )}
              </div>

              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className={'project-status ' + (project.status === 'Completed' ? 'status-done' : 'status-wip')}>
                  {project.status === 'Completed' ? '✅ Completed' : '🔨 In Progress'}
                </span>
              </div>

              <p className="project-desc">{project.description.slice(0, 100)}...</p>

              <div className="project-footer">
                <div className="project-tags">
                  {project.tech.map((t, j) => (
                    <span className="project-tag" key={j}>{t}</span>
                  ))}
                </div>
                <button className="btn-view-details" onClick={() => setSelected(project)}>
                  View Details
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div
            className={'modal-card' + (selected.type === 'code' ? ' modal-card-ide' : '')}
            onClick={(e) => e.stopPropagation()}
          >

            {selected.type === 'construction' && (
              <div className="modal-construction" style={{ background: selected.color }}>
                <span>🚧</span>
                <p>This project is currently under construction.</p>
                <p>Check back soon!</p>
              </div>
            )}

            {selected.type === 'code' && (
              <div className="modal-ide modal-ide-fullscreen">
                <div className="ide-topbar">
                  <span className="code-dot red"></span>
                  <span className="code-dot yellow"></span>
                  <span
                    className="code-dot green"
                    onClick={() => setSelected(null)}
                    style={{ cursor: 'pointer' }}
                    title="Close"
                  ></span>
                  <span className="ide-filename">
                    {selected.language === 'Python' ? 'main.py' : 'main.cpp'}
                  </span>
                  <span className="ide-close-hint">click green to close</span>
                </div>
                <div className="ide-body ide-body-full">
                  <div className="ide-line-numbers">
                    {selected.code.split('\n').map((_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>
                  <pre className="ide-code">
                    <code>{selected.code}</code>
                  </pre>
                </div>
              </div>
            )}

            {selected.type === 'image' && (
              <>
                <div className="modal-image-wrapper">
                  <img src={selected.image} alt={selected.title} className="modal-image" />
                </div>
                <div className="modal-body">
                  <div className="modal-header">
                    <h3 className="modal-title">{selected.title}</h3>
                    <span className={'project-status ' + (selected.status === 'Completed' ? 'status-done' : 'status-wip')}>
                      {selected.status === 'Completed' ? '✅ Completed' : '🔨 In Progress'}
                    </span>
                  </div>
                  <p className="modal-desc">{selected.description}</p>
                  <div className="modal-tags">
                    {selected.tech.map((t, j) => (
                      <span className="project-tag" key={j}>{t}</span>
                    ))}
                  </div>
                  <div className="modal-actions">
                    <button className="btn-secondary" onClick={() => setSelected(null)}>
                      Close
                    </button>
                  </div>
                </div>
              </>
            )}

          </div>
        </div>
      )}

    </section>
  )
}