# ngx-feather-icons

Simple, easy to use [Angular](https://angular.io/) component to manage [Feather icons](https://feathericons.com/).

**Install**

 ```shell
 $ npm install --save  ngx-feather-icons
 ```

**Import the module**
```typescript
//...
import { FeatherModule } from 'ngx-feather-icons';
@NgModule({
  //...
  imports: [
    //...
    FeatherModule
  ],
  //...
})
export class AppModule { }
```

# Usage and Options
To use the component use selector: `<fi></fi>`.

```html
<fi [name]="'activity'"></fi>
```


Name      | Type               | Options                                   | Optional
---       | ---                | ---                                       | ---
name      | `String`           | [Feather icons](https://feathericons.com/) | No

