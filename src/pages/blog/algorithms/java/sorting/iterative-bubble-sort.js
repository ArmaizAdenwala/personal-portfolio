import React from 'react';
import {
  Hero,
  Navbar,
  Footer,
  Container,
  Breadcrumbs,
} from '../../../../../components/general';
import { Title, Paragraph, CodeBlock } from '../../../../../components/content';
import '../../../../../styles/main.scss';
import '../../../Blog.scss';
import SEO from '../../../../../components/seo';

const IndexPage = () => (
  <div>
    <SEO
      title="Developing A Cross-Platform iOS & Android Social Media App"
      canonical="https://armaizadenwala.com/blog/social-media-app/"
      secondaryTitle=""
      description="This series will be covering how to create a cross-platform social media app using Ruby on Rails and React Native."
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="Developing A Cross-Platform iOS & Android Social Media App"
      description="This series will be covering how to create a cross-platform social media app using Ruby on Rails and React Native."
      extraContent
    />
    <div className="page__content">
      <Container>
        <Breadcrumbs
          items={[
            { name: 'HOME', url: '/', hideOnMobile: true },
            { name: 'BLOG', url: '/blog/', hideOnMobile: true },
            {
              name: 'ALGORITHMS',
              url: '/blog/algorithms/',
              hideOnMobile: true,
            },
            { name: 'JAVA', url: '/blog/algorithms/java/' },
            {
              name: 'SORTING',
              url: '/blog/algorithms/java/sorting/',
            },
            {
              name: 'ITERATIVE BUBBLE SORT',
              url: '/blog/algorithms/java/iterative-bubble-sort',
            },
          ]}
        />
        <div className="blog__card">
          <Title first>Overview</Title>
          <Paragraph>
            {`The bubble sort algorithm sorts an array by swapping adjacent
            elements until it is fully sorted. Bubble sort can be __O(n)__ or
            __O(n<sup>2</sup>)__ depending on the array being sorted.`}
          </Paragraph>
          <Title>Implementation</Title>
          <CodeBlock language="java">
            {`public static void bubbleSortIterative(int[] arr) {
  for (int step = 0; step < arr.length - 1; step++) {
    for (int curIndex = 0; curIndex < arr.length - 1 - step; curIndex++) {
      if (arr[curIndex] > arr[curIndex + 1]) {
        int firstVal = arr[curIndex];
        arr[curIndex] = arr[curIndex + 1];
        arr[curIndex + 1] = firstVal;
      }
    }
  }
}`}
          </CodeBlock>
          <Paragraph>
            `public static void`: Bubble sort mutates the array parameter that
            is passed in, therefore we do not return an array. Instead, the
            array that is passed to the sort method will be changed directly.
          </Paragraph>
          <Paragraph>
            `int[] arr`: Takes an array as a paramater called `arr`.
          </Paragraph>
          <Paragraph>
            {
              '`for (int step = 0; ... step++)`: Loops through the array multiple times until the array is fully sorted. At the end of each iteration/step, the next highest element will be sorted.'
            }
          </Paragraph>
          <Paragraph>
            {
              "`step < arr.length - 1;`: prevents the array from doing an uneccessary loop. On the last iteration, there will only be 1 element to sort left, which means it will already be in the correct position. We can subtract `1` from `array.length` to remove the final iteration that isn't needed."
            }
          </Paragraph>
          <Paragraph>{"`for (int curIndex = 0; ... curIndex++)`: loops through the entire unsorted portion of the array."}</Paragraph>
          <Paragraph>{"`curIndex < arr.length - 1 - step;`: this prevents unnecessary iterations by not looping through the sorted part of the array. Bubble sort only focuses on unsorted elements. After each `step`, the sorted elements would be the final elements of the array. This means that we can loop through the unsorted elements by subtracting `steps` from it."}</Paragraph>
          <Paragraph>{"Bubble sort always focuses on the current element, and the next element. So on the 2nd to last iteration for `curIndex`, the last element would be sorted. We can remove checking the last element by subtracting `1` from `array.length - step`"}</Paragraph>
          <Paragraph>`if (arr[curIndex] > arr[curIndex + 1])`: Gets the value of the current element and the next element. If the first element's value is greater, then it will swap the two.
          </Paragraph>
          <Paragraph></Paragraph>
        </div>
      </Container>
      <Footer />
    </div>
  </div>
);

export default IndexPage;
