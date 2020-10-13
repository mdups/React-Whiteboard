import React from 'react';



export const WidgetList = () =>
<div>
              <h3>
                Heading Widget
                <span class="float-right">
                              <a class="btn btn-warning">
                                  <i class="fa fa-arrow-up"></i>
                              </a>
                              <a class="btn btn-warning">
                                  <i class="fa fa-arrow-down"></i>
                              </a>
                              <select>
                                  <option>Heading</option>
                                  <option>YouTube</option>
                                  <option>Image</option>
                                  <option>Document</option>
                                  <option>Slides</option>
                              </select>
                              <a class="btn btn-danger">Delete</a>
                                  </span>
              </h3>

              <input class="form-control"/>
              <select class="form-control">
                <option>Heading 1</option>
                <option>Heading 2</option>
                <option>Heading 3</option>
                <option>Heading 4</option>
                <option>Heading 5</option>
              </select>
              <input class="form-control"
                     title="Name your widget" placeholder="Widget Name"/>
            </div>
