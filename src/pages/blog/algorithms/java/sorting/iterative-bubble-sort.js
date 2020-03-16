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
      title="Iterative Bubble Sort in Java"
      canonical="https://armaizadenwala.com/blog/social-media-app/"
      secondaryTitle="Sorting Algorithms"
      description="Iteratively swap adjacent elements of an array until the array is sorted"
      ldJson={{
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        '@id': 'https://armaizadenwala.com/blog/algorithms/java/sorting/iterative-bubble-sort/',
        description:
          'Iteratively swap adjacent elements of an array until the array is sorted.',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': 'https://armaizadenwala.com',
                name: 'Home',
              },
            },
            {
              '@type': 'ListItem',
              position: 2,
              item: {
                '@id': 'https://armaizadenwala.com/blog/',
                name: 'Blog',
              },
            },
            {
              '@type': 'ListItem',
              position: 3,
              item: {
                '@id': 'https://armaizadenwala.com/blog/algorithms/',
                name: 'Algorithms',
              },
            },
            {
              '@type': 'ListItem',
              position: 4,
              item: {
                '@id': 'https://armaizadenwala.com/blog/algorithms/java/',
                name: 'Java',
              },
            },
            {
              '@type': 'ListItem',
              position: 5,
              item: {
                '@id': 'https://armaizadenwala.com/blog/algorithms/java/sorting/',
                name: 'Sorting',
              },
            },
            {
              '@type': 'ListItem',
              position: 6,
              item: {
                '@id': 'https://armaizadenwala.com/blog/algorithms/java/sorting/iterative-bubble-sort/',
                name: 'Iterative Bubble Sort',
              },
            },
          ],
        },
        publisher: {
          '@type': 'Organization',
          name: 'Armaiz Adenwala',
          logo: {
            '@type': 'imageObject',
            url: 'https://armaizadenwala.com/armaiz-developer-full.png',
          },
        },
        url: 'https://armaizadenwala.com/blog/algorithms/java/sorting/iterative-bubble-sort/',
      }}
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="Iterative Bubble Sort in Java"
      description="Iteratively swap adjacent elements of an array until the array is sorted"
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
          <Paragraph>
            {
              '`for (int curIndex = 0; ... curIndex++)`: loops through the entire unsorted portion of the array.'
            }
          </Paragraph>
          <Paragraph>
            {
              '`curIndex < arr.length - 1 - step;`: this prevents unnecessary iterations by not looping through the sorted part of the array. Bubble sort only focuses on unsorted elements. After each `step`, the sorted elements would be the final elements of the array. This means that we can loop through the unsorted elements by subtracting `steps` from it.'
            }
          </Paragraph>
          <Paragraph>
            {
              'Bubble sort always focuses on the current element, and the next element. So on the 2nd to last iteration for `curIndex`, the last element would be sorted. We can remove checking the last element by subtracting `1` from `array.length - step`'
            }
          </Paragraph>
          <Paragraph>
            `if (arr[curIndex] > arr[curIndex + 1])`: Gets the value of the
            current element and the next element. If the first element's value
            is greater, then it will swap the two.
          </Paragraph>
          <Paragraph>
            `int firstVal = arr[curIndex];`: Temporarily stores the value of the
            current element.
          </Paragraph>
          <Paragraph>
            `arr[curIndex] = arr[curIndex + 1];` Sets the value of the first
            element to the value of the next element. At this point the current
            element and the next element are the same value.
          </Paragraph>
          <Paragraph>
            `arr[curIndex + 1] = firstVal;`: Sets the value of the next element
            to the original first value. This effectively swaps the value of
            both elements.
          </Paragraph>
          <Title>Optimizing Bubble Sort</Title>
          <Paragraph>
            {
              '"Right now, the algorithm is __O(n<sup>2</sup>)__. If a sorted array is passed in, then it will loop through it n<sup>2</sup> times.'
            }
          </Paragraph>
          <Paragraph>
            If the array ends up being sorted early, we can just end the bubble
            sort since there is nothing more to sort. We can tell if an array is
            sorted if we did not swap any elements during an iteration / step.
          </Paragraph>
          <CodeBlock language="java">
            {`public static void bubbleSortIterative(int[] arr) {
  for (int step = 0; step < arr.length - 1; step++) {
    int swaps = 0;
    for (int curIndex = 0; curIndex < arr.length - 1 - step; curIndex++) {
      if (arr[curIndex] > arr[curIndex + 1]) {
        int firstVal = arr[curIndex];
        arr[curIndex] = arr[curIndex + 1];
        arr[curIndex + 1] = firstVal;
        swaps++;
      }
    }

    if (swaps == 0) {
      break;
    }
  }
}`}
          </CodeBlock>
          <Paragraph>
            `int swaps = 0;`: Sets the `swaps` to equal `0` each iteration /
            step. Each iteration, we want to count the amount of swaps happen.
            If it goes through an iteration with no swaps, we will stop the
            algorithm.
          </Paragraph>
          <Paragraph>
            `swaps++;`: Increments `swaps` by `1` every time a swap occurs. Keep
            in mind `swap` becomes `0` each time it navigates through the array.
          </Paragraph>
          <Paragraph>
            `if (swaps == 0)`: A conditional that checks if no swaps have
            happened during the current iteration. This code is called after
            each iteration.
          </Paragraph>
          <Paragraph>
            `break;`: Ends the current loop. Since this code is within the
            `steps` loop, the entire function is done.
          </Paragraph>
          <Paragraph></Paragraph>
          <Paragraph></Paragraph>
          <Paragraph></Paragraph>
        </div>
      </Container>
      <Footer />
    </div>
  </div>
);

export default IndexPage;
