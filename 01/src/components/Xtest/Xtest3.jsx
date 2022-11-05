import React from "react";

class Test3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      course: "",
      coursesItem: [
        {id: 1, tag: "all"},
        {id: 2, tag: "react"},
        {id: 3, tag: "java"}
      ]
    };

  }



  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleChangeCourse = event => {
    this.setState({ course: event.target.value });
  };

  getUnique(arr, comp) {
    const unique = arr
      //store the comparison values in array
      .map(e => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter(e => arr[e])

      .map(e => arr[e]);
    console.log(unique);
    return unique;
  }

  componentDidMount() {
    const courses = require("./courses.json");
    this.setState({ courses: courses });
  }

  render() {

    const uniqueCouse = this.getUnique(this.state.courses, "tag");

    const courses = this.state.courses;
    const course = this.state.course;

/*     let filterDropdown = courses.filter(function(result) {
      return result.tag === course;
    }); */
    let filterDropdown = []

    if (course == 'all' || course == '') {
      filterDropdown = courses
    } else  {
      filterDropdown = courses.filter(function(result) {
        return result.tag === course;
      })
    }

    //let filterDropdown = this.state.coursesItem

/*     if (course === 'all') {
      return this.state.coursesItem
    } else {
      return courses.filter(function(result) {
        filterDropdown === course;
      });
    } */



    return (
      <div>


<form>
          <br />
          <br />
          <label>
            Looping through Courses tag from Json File
            <select
              value={this.state.course}
              onChange={this.handleChangeCourse}
            >
              {this.state.coursesItem.map(course => (
                <option key={course.id} value={course.tag}>
                  {course.tag}
                </option>
              ))}
            </select>
          </label>

          <div>
            {filterDropdown.map(course => (
              <div key={course.id} style={{ margin: "10px" }}>
                {course.course}
                <br />
              </div>
            ))}
          </div>
        </form>


        <hr>
        
        </hr>
        <div><pre>{JSON.stringify(this.state, null, 2) }</pre></div>;
      </div>
    );
  }
}

export default Test3